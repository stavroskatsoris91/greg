/**
 * Inject script snippets on the header when they are requested
 * Author: Stavros Katsoris <stavros@thortful.com>
 */
import { Injectable } from "@angular/core";
import { ScriptStore, Scripts, ScriptTags } from "../store/scriptStore";

export interface IScriptResponse {
  script: string;
  loaded: boolean;
  status: string;
}
interface ScriptAttribute {
  attr: string[][];
  src: string;
  loaded: boolean;
  loadedMethod?: () => void;
}

declare var document: any;

@Injectable({
  providedIn: "root",
})
export class ScriptLoader {
  private scriptMap: Map<ScriptTags, ScriptAttribute>;
  private queue: Map<string, Promise<IScriptResponse>> = new Map<
    string,
    Promise<IScriptResponse>
  >();
  constructor() {
    // Transform the available sript list into a map
    this.scriptMap = new Map<ScriptTags, ScriptAttribute>(
      ScriptStore.map((script: Scripts) => {
        return [
          script.name,
          {
            src: script.src,
            loaded: false,
            attr: script.attr || [],
          },
        ];
      })
    );
  }
  /** Load multiple requested scripts*/
  load(...scripts_: ScriptTags[]) {
    var promises: any[] = [];
    scripts_.forEach((script_) => promises.push(this.loadScript(script_)));
    return Promise.all(promises);
  }
  /** Load a single requested script and return the result as a promise */
  loadScript(name_: ScriptTags): Promise<IScriptResponse> {
    let loadedScript = this.queue.get(name_);
    if (loadedScript) {
      return loadedScript;
    } else {
      this.queue.set(
        name_,
        new Promise((resolve, reject) => {
          //resolve if already loaded
          const requestedScript = this.scriptMap.get(name_);
          if (!requestedScript) {
            resolve({
              script: name_,
              loaded: false,
              status: "Script not found",
            });
          }
          if (requestedScript.loaded) {
            resolve({
              script: name_,
              loaded: true,
              status: "Already Loaded",
            });
          } else {
            //load script
            let script = document.createElement("script");
            script.type = "text/javascript";
            script.src = requestedScript.src;
            // requestedScript.attr.map(([name,value])=>
            //     script.setAttribute(name, value)
            // )
            if (script.readyState) {
              //IE
              script.onreadystatechange = () => {
                if (
                  script.readyState === "loaded" ||
                  script.readyState === "complete"
                ) {
                  script.onreadystatechange = null;
                  requestedScript.loaded = true;
                  resolve({
                    script: name_,
                    loaded: true,
                    status: "Loaded",
                  });
                }
              };
            } else {
              //Others
              script.onload = (e) => {
                requestedScript.loaded = true;
                resolve({
                  script: name_,
                  loaded: true,
                  status: "Loaded",
                });
              };
            }
            script.onerror = (error: any) =>
              resolve({
                script: name_,
                loaded: false,
                status: "Loaded",
              });
            document.getElementsByTagName("head")[0].appendChild(script);
          }
        })
      );
      loadedScript = this.queue.get(name_);
      loadedScript.then(()=>{
        if(this.queue.get(name_)){
            this.queue.delete(name_);
        }
      })
      return loadedScript;
    }
  }
  saveMethod(name_: ScriptTags, method): void {
    const requestedScript = this.scriptMap.get(name_);
    requestedScript.loadedMethod = method;
  }
  loadMethod(name_: ScriptTags) {
    const requestedScript = this.scriptMap.get(name_);
    return requestedScript.loadedMethod;
  }
}
