const fs = require('fs');

// Create a file
fs.writeFile('sample.txt', 'Hello, World!', (err) => {
  if (err) {
    console.error('Error creating the file:', err);
  } else {
    console.log('File created successfully.');
    
    // Read data from the file
    fs.readFile('sample.txt', 'utf-8', (readErr, data) => {
      if (readErr) {
        console.error('Error reading the file:', readErr);
      } else {
        console.log('File content:', data);

        // Write data to the file
        fs.writeFile('sample.txt', 'Updated content', (writeErr) => {
          if (writeErr) {
            console.error('Error updating the file:', writeErr);
          } else {
            console.log('File updated successfully.');

            // Rename the file
            fs.rename('sample.txt', 'renamed.txt', (renameErr) => {
              if (renameErr) {
                console.error('Error renaming the file:', renameErr);
              } else {
                console.log('File renamed successfully.');

                // Append data to the file
                fs.appendFile('renamed.txt', '\nAppended content', (appendErr) => {
                  if (appendErr) {
                    console.error('Error appending data:', appendErr);
                  } else {
                    console.log('Data appended to the file.');

                    // Delete the file
                    fs.unlink('renamed.txt', (deleteErr) => {
                      if (deleteErr) {
                        console.error('Error deleting the file:', deleteErr);
                      } else {
                        console.log('File deleted successfully.');
                      }
                    });
                  }
                });
              }
            });
          }
        });
      }
    });
  }
});
