const viewer = new vim.Viewer()

viewer.loadVim(
  'https://vim.azureedge.net/samples/residence.vim',
  {
    rotation: { x: 270, y: 0, z: 0 },
  }
)

ModelLoaded.postMessage('Model loaded successfully !')

function resetCameraPosition(){
  viewer.reset()
  ResetModel.postMessage('Model reset successfully !')
}