export function getImage(type: string, image: string) {
  switch(type){
    case "jpg":
    case "png":
    case "jpeg":
      return image;
    case "pdf":
      return "../assets/img/pdf.png"
    case "docx":
      return "../assets/img/word.png"
    case "xlsx":
      return "../assets/img/excel.png"
    case "mp4":
      return "../assets/img/mp4.png"
    default:
      return "../assets/img/file.png"
  }
}
