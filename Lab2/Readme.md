# Crud
fs-> file system
- c->create
- r->retreive
- u->update
- d->delete
- fs module main purpose is to communicate with the operating system
- streaming is the process of giving a long file through small chuncks to the user due to fast connection.This features is also available in fs module

# File system of NodeJS
It allows JS code running outside the browser and interact directly to operating system
## Common operations on file/folder
- Reading and writing file -> readfile(),writeFile, appendFile()
- Directory management -> nkdir(), rmdir(), readdir()
- Metadata/information -> stat(), lstat(), fstat()
- Watching for changes -> watch(), watchFile(), unwatchFile()
- Streaming Large Files -> createReadStream(), createWriteStream()
- File Operations -> rename(), truncate(), unlink(), link(), syslink()

### Await can be used with any promise in a sync function. That a sync function will also accessed by await keyword