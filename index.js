const fs = require('fs')
const path = require('path')

/**
 *  traverseDirectories
 * @param {string} dirname directory to be traverse
 */
function generateDirectories(dirname) {

  let result = []
  try {
    let currentDirectories = fs.readdirSync(dirname, 'utf-8')
    for (let i = 0; i < currentDirectories.length; i++) {
      let curDir = path.join(dirname, currentDirectories[i])
      if (fs.statSync(curDir).isDirectory()) {
        let subChildren = generateDirectories(curDir)
        const item = {
          name: curDir,
          tag: 'dir',
          children: subChildren,
        }
        result.push(item)
      } else {
        result.push({
          name: curDir,
          tag: 'file'
        })
      }
    }

  } catch (err) {
    console.log(err.message)
  }
  return result
}


module.exports = generateDirectories


