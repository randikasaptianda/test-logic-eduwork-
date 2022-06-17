//soal nomor 1
const number1 = (x) => {
  let result = 1;
  while (x > 0) {
    result *= x;
    x--;
  }
  return result;
};

// console.log(number1(4));
// console.log(number1(8));

//soal nomor 2
let i = "abcde";
const reverse = (str) => {
  let result = "";
  let length = str.length;
  while (length > 0) {
    result += str[length - 1];
    length--;
  }
  return result;
};
// console.log(reverse(i));

//soal nomor 3
const printDigitValue = (str) => {
  let newString = "";
  let length = 0;
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i])) {
      newString += str[i];
    }
  }
  console.log(newString);

  length = newString.length - 1;
  for (let x = 0; x < newString.length; x++) {
    if (length >= 1) console.log(parseInt(newString[x]) * 10 ** length);
    else console.log(1);
    length--;
  }
};
printDigitValue("9.86-A5.321");

//soal nomor 4
let a = 3;
let b = 7;

[a, b] = [b, a];

// console.log(a);
// console.log(b);

//soal nomor 5
const bilangan = (x) => {
  let result = "";
  let angka = ["", "Satu", "Dua", "Tiga", "Empat", "Lima", "Enam", "Tujuh", "Delapan", "Sembilan", "Sepuluh", "Sebelas"];
  if (x > 100 || x < 1) {
    result = "Silahkan masukan angka 1-100";
  } else {
    if (x < 12) {
      result = angka[x];
    } else if (x > 11 && x < 20) {
      result = angka[x % 10] + " Belas ";
    } else if (x === 100) {
      result = "Seratus";
    } else {
      result = angka[Math.floor(x / 10)] + " Puluh " + angka[x % 10];
    }
  }

  return result;
};

// console.log(bilangan(4));
// console.log(bilangan(20));
// console.log(bilangan(39));
// console.log(bilangan(104));

//soal nomor 6
const highLow = (arr, low, high) => {
  result = arr.filter((n) => n < low && n > high);
  return result;
};

// console.log(highLow([1, 4, 7, 9, 12], 2, 15));

//soal nomor 7
const totalHighLow = (low, high) => {
  return highLow(low, high).length;
};

// console.log(totalHighLow([1, 4, 7, 9, 12], 2, 15));

//soal nomor 8
const eduwork = (x) => {
  let i = 1;
  while (i <= x) {
    if (i % 3 === 0 && i % 5 !== 0) {
      console.log("Edu");
    } else if (i % 5 === 0 && i % 3 !== 0) {
      console.log("Work");
    } else if (i % 3 === 0 && i % 5 === 0) {
      console.log("EduWork");
    } else {
      console.log(i);
    }
    i++;
  }
};

// eduwork(15);

//soal nomor 9
const lowHigh = (arr) => {
  let low = 0;
  let high = 0;
  arr.map((data) => {
    if (data === arr[0]) {
      high = data;
      low = data;
    } else {
      if (data < high) {
        high = data;
      } else if (data > low) {
        low = data;
      }
    }
  });
  console.log("low : ", low, " high : ", high);
};
// lowHigh([4, 2, 6, 88, 3, 11]);

//soal nomor 10
const kabisat = (thn) => {
  const isKabisat = new Date(thn, 1, 29).getDate() === 29;
  if (isKabisat) console.log(thn, "adalah tahun kabisat");
  else console.log(thn, "bukan tahun kabisat");
};

// kabisat(2024);
