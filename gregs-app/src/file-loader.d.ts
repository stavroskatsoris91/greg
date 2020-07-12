declare const FileLoaderImage: any

declare module "*.jpg" {
  export = FileLoaderImage
}

declare module "*.png" {
  export = FileLoaderImage
}

declare module "*.gif" {
  export = FileLoaderImage
}
