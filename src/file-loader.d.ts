declare const FileLoaderImage: IFileLoaderImage;

interface IFileLoaderImage {
  __esModule: boolean
  default: string
}
declare module "*.jpg" {
  export = FileLoaderImage
}

declare module "*.png" {
  export = FileLoaderImage
}

declare module "*.gif" {
  export = FileLoaderImage
}
declare module "*.svg" {
  export = FileLoaderImage
}
