/**

 * Defines sets of properties used to inject script snippets when they are needed

 * Author: Stavros Katsoris <stavros@thortful.com>

 */
export interface Scripts {
    name: ScriptTags
    src: string
}
export const enum ScriptTags {
    GoogleMaps = 'trustPilot',
}
/**
 * List of avaliable script snipets
 */
export const ScriptStore: Scripts[] = [
    {
        name: ScriptTags.GoogleMaps,
        src:"https://maps.googleapis.com/maps/api/js?key=AIzaSyCg19u4sGu9ZhqqHuVXedWM8ZeL2qvKd3A"
    },
]
