import goodStorage from 'good-storage';
export class ImgUtil {
  static imgList: Record<string, string> = {};

  static storageImgList(): void {
    // Check if the result from goodStorage.get('imgList') is an object
    const imgListFromStorage = goodStorage.get('imgList');
    if (typeof imgListFromStorage === 'object' && imgListFromStorage !== null) {
      // It's an object, so cast it to the expected type
      this.imgList = imgListFromStorage as Record<string, string>;
    } else {
      // If it's not an object, initialize it as an empty object
      this.imgList = {};
    }

    if (this.isEmpty()) {
      this.loadAllImg();
      goodStorage.set('imgList', this.imgList);
    }
  }

  static isEmpty(): boolean {
    return Object.getOwnPropertyNames(this.imgList).length === 0;
  }

  static getImg(imgName: string): string {
    return ImgUtil.imgList[imgName];
  }

  static loadAllImg(): void {
    const imgMap = import.meta.glob('../assets/img/**/*.{jpg,png}', {
      eager: true
    });
    console.log('imgMap', imgMap);
    let absolutePath: string = ''; // 絕對路徑
    let imgName: string = ''; // 檔名
    for (const relativePath in imgMap) {
      // console.log(imgMap[relativePath]);
      absolutePath = imgMap[relativePath].default;
      imgName = absolutePath.substring(absolutePath.lastIndexOf('/') + 1);
      // console.log("imgName", imgName);
      this.imgList[imgName] = absolutePath;
    }
    console.log('this.imgList', this.imgList);
  }
}

export default ImgUtil.getImg;
