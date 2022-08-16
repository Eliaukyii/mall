import {request} from './request'

//分类左侧
export function getCategory(){
    return request({
      url:'/category'
    }).catch(err=>err)
   }

export function getSubCategory(maitKey) {
    return request({
        url:'/subcategory',
        params:{
            maitKey
        }
    }).catch(err=>err)
  }

// export function getSubCategoryDetail(miniWallkey,type){
//     return request({
//         url:'/subcategory/detail',
//         params:{
//             miniWallkey,
//             type
//         }
//     }).catch(err=>err)
// }

