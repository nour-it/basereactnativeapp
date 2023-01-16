// import { Asset } from 'expo-asset';
// import * as FileSystem from 'expo-file-system';
import * as SQLite from 'expo-sqlite';
import { useState } from 'react';

// async function openDatabase(pathToDatabaseFile) {
//   if (!(await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'SQLite')).exists) {
//     await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'SQLite');
//   }
//   await FileSystem.downloadAsync(
//     Asset.fromModule(require('contact')).uri,
//     FileSystem.documentDirectory + 'SQLite/myDatabaseName.db'
//   );
//   return SQLite.openDatabase('myDatabaseName.db');
// }


class Database {

  /**
    * @param {string} name
    */
  constructor(name) {
    this.name = name;
  }

  openDatabase = () => {
    this.db = SQLite.openDatabase(this.name)
    this.createTable();
  }

  closeDatabase() {
    this.db.closeAsync();
  }

  createTable() {
    this.db.transaction(tx => {
      tx.executeSql(
        `create table if not exists items (id integer primary key not null, name text);`
      );
    });
  }

  insetItem() {
    this.db.transaction(tx => {
      tx.executeSql('insert into items (name) values (?)', ['item name']);
    });
  }

  getItems () {
    this.db.transaction(tx => {
      tx.executeSql('select * from items', [], (_, { rows }) =>
        console.log(JSON.stringify(rows))
      );
    });
  }

}

export default function useSqlite() {
  const [db, setDb] = useState(new Database("contact.db"))
  return [db];
}