import * as fs from 'fs-extra';
import * as path from 'path';

export const eachItem = async (dirPath: string, callBack: (details: EachItemCallBackParameter) => Promise<void>) => {
    const dirItems = fs.readdirSync(dirPath);
    for (const item of dirItems) {
        const itemPath = path.join(dirPath, item);
        const itemStat = fs.statSync(itemPath);
        await callBack({
            item,
            dirPath,
            itemStat,
            itemPath,
        });
        if (itemStat.isDirectory()) {
            await eachItem(itemPath, callBack);
        }
    }
};

export const posixPath = (...pathString) => path.join(...pathString).replace(/\\/g, '/');

export type EachItemCallBackParameter = {
    item: string;
    dirPath: string;
    itemStat: fs.Stats;
    itemPath: string;
};
