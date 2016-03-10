'use strict';

// A reference to a file
class FilePost {
  constructor(name, hash, size) {
    this.type = "file";
    this.name = name;
    this.hash = hash;
    this.size = size;
    this.ts = new Date().getTime();
  }
}

module.exports = FilePost;
