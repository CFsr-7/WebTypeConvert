/*
* 模板数据转JSON字符串
* */
const _jsonConvert = (value:string) => {
    let result = value;

    // 添加引号给键名
    result = result.replace(/(\w+)(:)/g, '"$1"$2');

    // 添加引号给字符串值
    result = result.replace(/"([^"]+)":/g, '"$1":');

    // 处理数组
    result = result.replace(/\[([^\]]+)\]/g, (_, match) => {
        const quotedArray = match.replace(/(\w+)/g, '"$1"');
        return `[${quotedArray}]`;
    });

    // 处理嵌套的对象
    result = result.replace(/\{([^}]+)\}/g, (_, match) => {
        const quotedObject = match.replace(/(\w+):/g, '"$1":');
        return `{${quotedObject}}`;
    });

    return result;
}

export {
    _jsonConvert
}
