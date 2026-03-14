function mergeSettings(savedSettingsJSON, defaultSettings) {

    const savedSettings = JSON.parse(savedSettingsJSON);

    const merged = { ...defaultSettings, ...savedSettings };


    const mergedJSON = JSON.stringify(merged);

    return {
        mergedObject: merged,
        mergedJSONString: mergedJSON
    };
}
const defaultSettings = {
    theme: "light",
    notifications: true,
    fontSize: 14
};

const savedSettingsJSON = '{"theme":"dark","fontSize":16}';

const result = mergeSettings(savedSettingsJSON, defaultSettings);

console.log(result.mergedObject);
console.log(result.mergedJSONString);

///First we convert JSON string into object using JSON.parse().
///Then we merge default settings and saved settings using spread operator (... ).
//Saved settings override default values if the key exists.
//Finally we convert merged object back into JSON string using JSON.stringify().