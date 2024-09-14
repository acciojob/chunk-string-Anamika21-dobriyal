function chunkString(str, chunkLength) {
    // Handle the edge case when the input string is null or empty
    if (!str || chunkLength <= 0) {
        return [];
    }

    let result = [];
    for (let i = 0; i < str.length; i += chunkLength) {
        result.push(str.slice(i, i + chunkLength));
    }

    return result;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(chunkString(str, chunkLength));
