const initController = (req, res) => { 
    res.render("screens/init");
};

const listController = (req, res) => {
    res.render("screens/list");
};
 
const globalController = {  //globalController 변수를 만들어서 안에 전에 만들었던 것을 넣는다.
    initController,
    listController,
}

export default globalController; //그리고 그것을 외부에서 사옹할 수 있게 export default를 해준다.