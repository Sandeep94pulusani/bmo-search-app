export const sortDateAsc = (a, b) => {
    const date1 = new Date(a.publish_date).getTime();
    const date2 = new Date(b.publish_date).getTime();
    return Math.sign(date1 - date2);
  };
  
  export const sortDateDesc = (a, b) => {
    const date1 = new Date(a.publish_date).getTime();
    const date2 = new Date(b.publish_date).getTime();
    return Math.sign(date2 - date1);
  };
  
  export const sortTitleAToZ = (a, b) => {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  };
  
  export const sortTitleZToA = (a, b) => {
    if (a.title > b.title) {
      return -1;
    }
    if (a.title < b.title) {
      return 1;
    }
    return 0;
  };