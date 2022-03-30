/**

 * Defines sets of properties used to inject script snippets when they are needed

 * Author: Stavros Katsoris <stavros@thortful.com>

 */
export interface Scripts {
  name: ScriptTags;
  src: string;
  attr?: string[][];
}
export const enum ScriptTags {
  GoogleMaps = "Googlemaps",
  TripAdvisorMobile = "TripAdvisorMobile",
  TripAdvisorMobileGR = "TripAdvisorMobileGreek",
  TripAdvisorDesktop = "TripAdvisorDesktop",
  TripAdvisorDesktopGR = "TripAdvisorDesktopGreek",
}
/**
 * List of avaliable script snipets
 */
export const ScriptStore: Scripts[] = [
  {
    name: ScriptTags.GoogleMaps,
    src:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyCg19u4sGu9ZhqqHuVXedWM8ZeL2qvKd3A",
  },
  {
    name: ScriptTags.TripAdvisorMobile,
    src:
      "https://www.jscache.com/wejs?wtype=selfserveprop&uniq=207&locationId=10367019&lang=en_UK&rating=true&nreviews=5&writereviewlink=true&popIdx=false&iswide=false&border=true&display_version=2",
    attr: [
      ["data-loadtrk", ""],
      ["onload", "this.loadtrk=true"],
    ],
  },
  {
    name: ScriptTags.TripAdvisorMobileGR,
    src:
      "https://www.jscache.com/wejs?wtype=selfserveprop&uniq=207&locationId=10367019&lang=el&rating=true&nreviews=5&writereviewlink=true&popIdx=false&iswide=false&border=true&display_version=2",
    attr: [
      ["data-loadtrk", ""],
      ["onload", "this.loadtrk=true"],
    ],
  },
  {
    name: ScriptTags.TripAdvisorDesktop,
    src:
      "https://www.jscache.com/wejs?wtype=selfserveprop&uniq=789&locationId=10367019&lang=en_UK&rating=true&nreviews=4&writereviewlink=true&popIdx=false&iswide=true&border=true&display_version=2",
    attr: [
      ["data-loadtrk", ""],
      ["onload", "this.loadtrk=true"],
    ],
  },
  {
    name: ScriptTags.TripAdvisorDesktopGR,
    src:
      "https://www.jscache.com/wejs?wtype=selfserveprop&uniq=789&locationId=10367019&lang=el&rating=true&nreviews=4&writereviewlink=true&popIdx=false&iswide=true&border=true&display_version=2",
    attr: [
      ["data-loadtrk", ""],
      ["onload", "this.loadtrk=true"],
    ],
  },
];
