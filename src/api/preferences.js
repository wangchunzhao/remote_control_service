import fetch from '@/utils/service'

// #region 更新表格字段 start
export const updatePreferences = ({ ForeignId, TableType, Field }) => {
  return fetch.post(
    BASE_URI + '/api/TableField/UpdateTableField',
    {
      ForeignId,
      TableType,
      Field
    },
    {
      headers: { 'Content-Type': 'application/json' }
    }
  )
}
// #endregion 更新表格字段 end

// #region 更新表格字段 start
export const getPreferences = ({ type, foreignId }) => {
  return fetch.get(BASE_URI + '/api/TableField/GetTableField', {
    params: {
      foreignId,
      type
    }
  })
}
// #endregion 更新表格字段 end
