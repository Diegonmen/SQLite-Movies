
import SeriesView from './SeriesView';
import React, { useEffect, useState } from 'react';
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'database.db', createFromLocation: 1});

const SeriesScreen = (props) => {
  var serie_id = props.route.params
  var [loading, setLoading] = useState(true);
  var [serie, setSerie] = useState({});
  useEffect(() => {
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT * FROM series where id = ?",
        [serie_id],
        function (tx, res) {
          setSerie(res.rows.item(0))
          setLoading(false)
        },
      );
    });
  }, []);

  return (
    <SeriesView
    serie={serie}
      loading={loading}
    />
  );
};

export default SeriesScreen;
