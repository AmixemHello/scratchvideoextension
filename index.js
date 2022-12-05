class VideoExtension {
  getInfo() {
    return {
      id: 'videoextension', // change this if you make an actual extension!
      name: 'Video',
      blocks: [
        {
          opcode: 'load',
          blockType: Scratch.BlockType.COMMAND,
          text: 'load video with url: [URL]',
          arguments: {
            URL: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'https://amixemhello.github.io/scratchvideoextension/default/video.mp4'
            }
          }
        }
      ]
    };
  }
  load() {
    return "error";
  }
}
Scratch.extensions.register(new StrictEqualityExtension());
