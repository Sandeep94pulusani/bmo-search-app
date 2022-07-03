import {
    sortDateAsc,
    sortDateDesc,
    sortTitleAToZ,
    sortTitleZToA,
  } from "./sort";
  
  const data = [
    {
      title: "Harry Potter",
      publish_date: "1974",
    },
    {
      title: "The Great Gatsby",
      publish_date: "December 14, 2007",
    },
    {
      title: "The Lord of the Rings",
      publish_date: "May 2003",
    },
  ];
  
  test("sortDateAsc function to return expected output", () => {
    const sortDateAscData = data.sort(sortDateAsc);
    const expectedOutput = [
      {
        title: "Harry Potter",
        publish_date: "1974",
      },
      {
        title: "The Lord of the Rings",
        publish_date: "May 2003",
      },
      {
        title: "The Great Gatsby",
        publish_date: "December 14, 2007",
      },
    ];
    expect(sortDateAscData).toEqual(expectedOutput);
  });
  
  test("sortDateDesc function to return expected output", () => {
    const sortDateDescData = data.sort(sortDateDesc);
    const expectedOutput = [
      {
        title: "The Great Gatsby",
        publish_date: "December 14, 2007",
      },
      {
        title: "The Lord of the Rings",
        publish_date: "May 2003",
      },
      {
        title: "Harry Potter",
        publish_date: "1974",
      },
    ];
    expect(sortDateDescData).toEqual(expectedOutput);
  });
  
  test("sortTitleAToZ function to return expected output", () => {
    const sortTitleAToZData = data.sort(sortTitleAToZ);
    const expectedOutput = [
      {
        title: "Harry Potter",
        publish_date: "1974",
      },
      {
        title: "The Great Gatsby",
        publish_date: "December 14, 2007",
      },
      {
        title: "The Lord of the Rings",
        publish_date: "May 2003",
      },
    ];
    expect(sortTitleAToZData).toEqual(expectedOutput);
  });
  
  test("sortTitleZToA function to return expected output", () => {
    const sortTitleZToAData = data.sort(sortTitleZToA);
    const expectedOutput = [
      {
        title: "The Lord of the Rings",
        publish_date: "May 2003",
      },
      {
        title: "The Great Gatsby",
        publish_date: "December 14, 2007",
      },
      {
        title: "Harry Potter",
        publish_date: "1974",
      },
    ];
    expect(sortTitleZToAData).toEqual(expectedOutput);
  });