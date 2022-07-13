const Category = require('../Schema/CategorySchema');
const { default: slugify } = require('slugify');

function createCategories(categories, parentId = null) {
  
    // const categoryList = [];
    // let category;
    // if (parentId == null) {
    //   category = categories.filter((cat) => cat.parentId == null);
    // } else {
    //   category = categories.filter((cat) => cat.parentId == parentId);
    // }
  
    for (let cate of category) {
      categoryList.push({
        _id: cate._id,
        name: cate.name,
        slug: cate.slug,
        parentId: cate.parentId,
        children: createCategories(categories, cate._id)
      });
    }
  
    return categoryList;
}
  
exports.addCategory = (req, res) => {

  let Object = {name : req.body.name , slug : slugify(req.body.name)};

  const newcategory = new Category(Object);

  newcategory.save((error , data)=>{
      if(error)
      {
          res.status(400).json({error})
      }
      else
      {
          res.status(200).json({data})
      }
  })
};
  
exports.getCategories = (req, res) => {
    Category.find({}).exec((error, categories) => {
      if (error) return res.status(400).json({ error });
      if (categories) {
        // const categoryList = createCategories(categories);
        res.status(200).json({ categories });
      }
    });
};
  