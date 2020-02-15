import musicData from "./music_data";

function musicDataSort() {
  musicData.sort((a, b) => {
    var a1 = a.name.toLowerCase();
    var b1 = b.name.toLowerCase();
    return a1 < b1 ? -1 : a1 > b1 ? 1 : 0;
  });
  musicDataSort();
}

export default musicDataSort;
