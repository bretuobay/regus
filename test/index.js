const { expect } = require("chai");

import {
  APP_VERSION,
  containsEmail,
  isValidEmail,
  isValidUrl,
  isValidIPAddress,
  isValidDate,
  isValidPhoneNumber,
  isValidPassword,
  isValidAscii,
  isValidImageFile,
  isNegativeNumber
} from "../lib";

describe("My package", function() {
  it("should pass version as defined", function() {
    expect(APP_VERSION).to.equals("1.0.3");
  });
});

describe("Email checking suite", function() {
  it("should check if string contains email ", function() {
    expect(containsEmail("test must email@email.com fail")).to.equals(true);
  });

  it("should check if email string is valid", function() {
    expect(isValidEmail("email@email.com")).to.equals(true);
  });

  it("should return false when string is not a valid email", function() {
    expect(isValidEmail("email.email.com")).to.equals(false);
  });
});

describe("Url checking suite", function() {
  it("should check if passed url is valid url", function() {
    expect(isValidUrl("http://www.festusyeboah.com")).to.equals(true);
  });

  it("should check if passed url is valid url", function() {
    expect(isValidUrl("https://www.festusyeboah.com")).to.equals(true);
  });
});

describe("IP Address  checking suite", function() {
  it("should verfiy if IP is IPv4 address", function() {
    expect(isValidIPAddress("127.0.0.1")).to.equals(true);
  });

  it("should verfiy if IP is not IPv4 address", function() {
    expect(isValidIPAddress("127.0.0.145z")).to.equals(false);
  });
});

describe("Is valid date in certain format", function() {
  it("should verify date is of format dd/mm/yyyy ", function() {
    expect(isValidDate("20/02/2015")).to.equals(true);
  });

  it("should verify date is of format dd-mm-yyyy ", function() {
    expect(isValidDate("20-02-2016")).to.equals(true);
  });

  it("should verify date is of format dd.mm.yyyy ", function() {
    expect(isValidDate("20.02.2017")).to.equals(true);
  });

  it("should verify date is NOT of correct format ddmm.yyyy ", function() {
    expect(isValidDate("2002.2017")).to.equals(false);
  });

  it("should verify date is NOT of correct format a random string ", function() {
    expect(isValidDate("cool2017")).to.equals(false);
  });

  it("should verify date is NOT of correct format dd/mm.yyyy ", function() {
    expect(isValidDate("12/12.2017")).to.equals(false);
  });
});

/**
   * (123) 456-7890
    (123)456-7890
    123-456-7890
    123.456.7890
    1234567890
    +31636363634
    075-63546725
   */
describe("Generic Phone number checking suite", function() {
  it("should verify phone number as one of the valid formats", function() {
    expect(isValidPhoneNumber("(123) 456-7890")).to.equals(true);
  });

  it("should verify phone number as one of the valid formats", function() {
    expect(isValidPhoneNumber("(123)456-7890")).to.equals(true);
  });

  it("should verify phone number as one of the valid formats", function() {
    expect(isValidPhoneNumber("123-456-7890")).to.equals(true);
  });

  it("should verify phone number as one of the valid formats", function() {
    expect(isValidPhoneNumber("123-456-7890")).to.equals(true);
  });

  it("should verify phone number as one of the valid formats", function() {
    expect(isValidPhoneNumber("123.456.7890")).to.equals(true);
  });

  it("should verify phone number as one of the valid formats", function() {
    expect(isValidPhoneNumber("1234567890")).to.equals(true);
  });

  it("should verify phone number as one of the valid formats", function() {
    expect(isValidPhoneNumber("+31636363634")).to.equals(true);
  });

  it("should verify phone number as NOT one of the valid formats", function() {
    expect(isValidPhoneNumber("-31636363634")).to.equals(false);
  });

  it("should verify phone number as one of the valid formats", function() {
    expect(isValidPhoneNumber("075-63546725")).to.equals(true);
  });

  it("should verfiy empty phone number as NOT one of the valid formats", function() {
    expect(isValidPhoneNumber("")).to.equals(false);
  });

  it("should verfiy random string phone number as NOT one of the valid formats", function() {
    expect(isValidPhoneNumber("cueosjsnajjj")).to.equals(false);
  });
});

describe("test Suite Light weight password validator", function() {
  const truthyPasswordList = [
    "@@V4-3Z`zTzM{>k",
    '12qw!"QW12',
    '123qweASD!"#',
    '1qA!"#$%&',
    "Günther32"
  ];

  truthyPasswordList.forEach(password => {
    it(
      "should validate password is valid",
      function() {
        expect(isValidPassword(password)).to.equals(true);
      },
      password
    );
  });

  const falsyPasswordList = [
    "123456789",
    "qweASD123",
    "qweqQWEQWEqw",
    "12qwAS!"
  ];

  falsyPasswordList.forEach(password => {
    it(
      "should validate password is valid",
      function() {
        expect(isValidPassword(password)).to.equals(false);
      },
      password
    );
  });

  it("should verfiy empty password as NOT valid", function() {
    expect(isValidPassword("")).to.equals(false);
  });
});

describe("Test suite for ascii characters", function() {
  it("should verify it charaters are ASCII charaters", function() {
    expect(isValidAscii("xxxabcxxx")).to.equals(true);
  });

  it("should verify it charaters are ASCII charaters", function() {
    expect(isValidAscii("xxx☃☃☃xxx")).to.equals(false);
  });
});

describe("Is valid image file", function() {
  // assumes file name is valid?
  let imageFileArray = ["wow.jpeg", "nice abbs.gif", "goojob.gif"];

  imageFileArray.forEach(imageFile => {
    it(imageFile + " : file extension is supported", function() {
      expect(isValidImageFile(imageFile)).to.equals(true);
    });
  });

  let badImageFileArray = ["bigfile.pdf", "gatto rouge.docx", "jpeg.nice"];

  badImageFileArray.forEach(imageFile => {
    it(imageFile + " : file extension is NOT supported", function() {
      expect(isValidImageFile(imageFile)).to.equals(false);
    });
  });
});

describe('Suite for negative number',function(){

  it("should verfify that it is a negative number",function(){
    expect(isNegativeNumber(-23)).to.equals(true);
  });

  it("should verfify that it is a negative number",function(){
    expect(isNegativeNumber(-1.5)).to.equals(true);
  });

  it("should verfify that it is a negative number",function(){
    expect(isNegativeNumber(-5e+4)).to.equals(true);
  });


  it("should verfify that it is a negative number",function(){
    // why is this negative?
    expect(isNegativeNumber(5e+4)).to.equals(false);
  });


});
