var data = require('../data-store');
var projects = data.getProjects();
var router = require('express').Router();


const getData = (req, res, next) => {
    res.json(projects)
};


const getActiveProjects = (req, res, next) => {
    const filteredProjects = projects.filter(el => el.isActive)
    res.json(filteredProjects)
  
}

const getProjectById =  (req, res, next) => {
    const id = parseInt(req.params.id)
    const exist = projects.findIndex(el => el.id === id);

    if(exist > -1) {
        res.json(projects[exist])
    }else {
        res.json({
            message: "Project not found"
        })
    }

}

router.get('/', getData)
router.get('/active', getActiveProjects)
router.get('/project/:id', getProjectById)
module.exports = router;