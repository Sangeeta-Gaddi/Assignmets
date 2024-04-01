//3 How to find out if the given two strings are anagrams or not.

function areAnagrams(str1, str2) {
    
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    
    // Check if the lengths of the strings are different
    if (str1.length !== str2.length) {
      return false;
    }
    
    let sortStr1 = str1.split('').sort().join('');
    let sortStr2 = str2.split('').sort().join('');
    
    // Check if the sorted strings are equal
     if(sortStr1 === sortStr2)
     return true;
    else{
        return false;
    }
  }
  
  // Test cases
  console.log(areAnagrams("listen", "silent")); // true
  console.log(areAnagrams("hello", "world")); // false