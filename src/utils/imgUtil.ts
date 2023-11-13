export class ImgUtil {
  static imgList: Record<string, string> = {};
  static getImg(imgName: string): string {
    return ImgUtil.imgList[imgName];
  }

  static loadAllImg() {
    const imgMap = import.meta.glob("../assets/img/**/*.{jpg,png}", {
      eager: true,
      import: "default",
    });
    console.log("imgMap", imgMap);
    let absolutePath: string = ""; //絕對路徑
    let imgName: string = ""; //檔名
    for (let relativePath in imgMap) {
      // console.log(imgMap[relativePath]);
      absolutePath = imgMap[relativePath] as string;
      imgName = absolutePath.substring(absolutePath.lastIndexOf("/") + 1);
      // console.log("imgName", imgName);
      this.imgList[imgName] = absolutePath;
    }
    console.log("this.imgList", this.imgList);
  }
}

export default ImgUtil.getImg;
