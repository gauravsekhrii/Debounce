
import { useEffect, useState } from "react";
import "./App.css";

const App = () => {

  const countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua & Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia & Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central Arfrican Republic","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauro","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre & Miquelon","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","St Kitts & Nevis","St Lucia","St Vincent","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad & Tobago","Tunisia","Turkey","Turkmenistan","Turks & Caicos","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
  const [countryArr, setCountryArr] = useState([]);
  const [searchText, setSearchText] = useState("");

  const getData = (inputVal:any) => {
    let arr:any = countries.filter((x:any) => inputVal.length > 0 ? x.toUpperCase().includes(inputVal.toUpperCase()) : null);
    setSearchText(inputVal);
    setCountryArr(arr);
    console.log("API called")
  }

  const debounce = (callback:any, seconds:any) => {
    let timer:any;
    return function (args:any) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        callback(args);
      }, seconds);
    };
  };

  const changed = debounce(getData, 500);

  const highlightedText = (fullstring:string) => {
    let strArray = fullstring.toLowerCase().split(searchText.toLowerCase());
    let tags = (
      <>
        <span>{strArray[0]}</span><strong>{searchText}</strong><span>{strArray[1]}</span>
      </>
    )
    console.log(strArray)
    return tags;
  }

  return (
    <div className="container">
        <div className="autocomplete">
            <input id="myInput" type="text" name="myCountry" placeholder="Country" onInput={(e:any) => changed(e.target.value)}></input>
            <div id="myInputautocomplete-list" className="autocomplete-items">
              {countryArr.map((y:any, i:number) => (
                <div key={i}>{highlightedText(y)}</div>
              ))}
            </div>
        </div>
    </div>
  );
};

export default App;
