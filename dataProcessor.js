async function processData(page) {
  let result = [];

  // get all the elements with the class name "surebet_record"
  const elements = await page.$$('.surebet_record');

  // map over each element and get its text content
  const records = await Promise.all(elements.map(el => el.textContent()));

  // create an object to filter out the text content of each element
  const recordsfilter = {};
  const porcent = {};

  // loop over the records and filter out unnecessary text content
  for (let i = 0; i < records.length; i++) {
    let str = records[i].split('\n').filter(el => el.trim() !== '');
    str = str.filter(element => !element.includes("●") && !element.includes("○"));
    str = str.slice(0, str.length - 1);
    str = str.map(str => str.trimLeft());

    // store the filtered text content in the recordsfilter object
    recordsfilter[i] = str;

    // store the percentage value in the porcent object
    porcent[i] = recordsfilter[i][0];

    // remove the first two elements from the filtered text content
    recordsfilter[i].shift();
    recordsfilter[i].shift();

    // create an object with the percentage value as the key and an array of values as the value
    const resultobj = {};
    resultobj[porcent[i]] = recordsfilter[i].reduce((acc, curr, index) => {
      if (index % 5 === 0) {
        acc.push(recordsfilter[i].slice(index, index + 5));
      }
      return acc;
    }, []);

    // push the result object into the result array
    result.push(resultobj);
  }

  // return the result array
  return result;
}

module.exports = {
  processData
}
