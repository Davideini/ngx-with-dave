import { Injectable } from '@angular/core';

@Injectable()
export class DragNDropService {
  reject = (files: File[], regex: RegExp): File[] =>
    files.filter(file => !regex.test(file.name));

  constructor() {}

  // reject(files: File[], regex: RegExp) {
  //   return files.filter(file => !regex.test(file.name));
  // }

  toFilesArray(fileList: FileList): File[] {
    const files: File[] = [];

    for (let index = 0; index < fileList.length; ) {
      files.push(fileList.item(index++));
    }

    return files;
  }
}
