function chunkString(str, chunkLength) {
    // If the input string is null, return an empty array
    if (!str) {
        return [];
    }

    const chunks = [];
    // Iterate through the string, incrementing by chunkLength each time
    for (let i = 0; i < str.length; i += chunkLength) {
        // Push each chunk into the chunks array
        chunks.push(str.substring(i, i + chunkLength));
    }

    return chunks;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(chunkString(str, chunkLength));
