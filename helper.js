function getApi (url, params, callback) {
  let requestUrl = replaceParams(url, params); 
  jQuery.get(requestUrl, function(result) {
    if (result.status === 'OK') {
      callback(result.data);
    } else {
      callback(null, 'Something went wrong');
    }
  });
}

function replaceParams (string, params) {
  let requestUrl = string; 
  for (let key in params) {
    requestUrl = requestUrl.replace(':' + key, params[key]);
  }
  return requestUrl;
}

function renderTable (tableID, columns, data) {
  let table = jQuery('#' + tableID);
  table.empty();
  table.append(renderHeader(columns));
  table.append(renderBody(columns, data));
}

function renderHeader (columns) {
  let tableHead = jQuery('<thead></thead>');
  let row = jQuery('<tr></tr>');
  for (let key in columns) {
    row.append('<td>' + columns[key] + '</td>');
  }
  tableHead.append(row);
  return tableHead;
}

function renderBody (columns, data) {
  let tableBody = jQuery('<tbody></tbody>');
  data.forEach(function(element) {
    let row = jQuery('<tr></tr>');
    for (let key in columns) {
      row.append('<td>' + element[key] + '</td>');
    }
    tableBody.append(row);
  });
  return tableBody;
}
