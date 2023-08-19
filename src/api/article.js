import request from '@/utils/request'

// 获取-文章分类
export const artGetChannelsService = () => request.get('/my/cate/list')

// 增加-文章分类
export const artAddChannelService = (data) => request.post('/my/cate/add', data)

// 更新-文章分类
export const artEditChannelService = (data) =>
  request.put('/my/cate/info', data)

// 删除-文章分类
export const artDelChannelService = (id) =>
  request.delete('/my/cate/del', {
    params: { id }
  })

// 获取-文章列表 get params
export const artGetListService = (params) =>
  request.get('/my/article/list', { params })

// 发布-文章
export const artPublishService = (data) => request.post('/my/article/add', data)

// 编辑-文章
export const artGetDetailService = (id) =>
  request.get('my/article/info', { params: { id } })

// 更新-文章
export const artEditService = (data) => request.put('my/article/info', data)

// 删除=文章
export const artDelService = (id) =>
  request.delete('my/article/info', { params: { id } })
