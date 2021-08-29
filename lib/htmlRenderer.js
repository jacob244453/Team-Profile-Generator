const path = require("path");
const fs = require("fs");

const templatesDir = path.resolve(__dirname, "../templates")

const render = employees => {
    const html = [];

    html.push(...employees
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => renderManager(manager))
    );
    html.push(...employees
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => renderManager(engineer))
    );
    html.push(...employees
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => renderManager(intern))
        );

        return renderMain(html.join(""));

};

const renderManager = manager => {
let template = fs.readFileSync(path.resolve(templatesDir, "manager.html"), "utf8");
}
