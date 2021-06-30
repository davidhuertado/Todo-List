(()=>{"use strict";const t={projectsArray:[],projectUl:document.querySelector(".projects-ul"),createAddProject:function(){const t=document.getElementById("project").value;return new class{constructor(t){this.title=t,this.tasks=[],this.display=!1,this.taskDisplayed=!1}}(t)},displayProjects:function(){t.projectsArray.forEach((e=>{if(!e.display){e.display=!0;const c=document.createElement("li");c.classList.add("nav-item");const s=document.createElement("a");s.classList.add("nav-link","project-name"),s.textContent=e.title,s.href="#",document.getElementById("project").value="",c.appendChild(s),t.projectUl.appendChild(c)}}))}},e=t,c={taskDisplayed:!1,createTask(){const t=document.getElementById("task").value,e=document.getElementById("date").value;return new class{constructor(t,e){this.title=t,this.date=e,this.checked=!1}}(t,e)},displayTask(t){const e=document.querySelector(".big-todos-containers"),c=document.createElement("div");c.classList.add("tasks-containers","row"),e.appendChild(c);const s=document.createElement("div");s.classList.add("left-task","col-8","row"),c.appendChild(s);const n=document.createElement("div");n.classList.add("task-time","right-task","col-4"),c.appendChild(n),n.textContent=t.date,document.getElementById("date").value="";const o=document.createElement("div");o.classList.add("checkbox","col-6"),s.appendChild(o);const a=document.createElement("div");a.classList.add("task-name","col-6"),s.appendChild(a),a.textContent=t.title,document.getElementById("task").value=""},pushTaskInProject(t){const c=document.querySelector(".project-todo-title").textContent,s=e.projectsArray.findIndex((t=>t.title===c));e.projectsArray[s].tasks.push(t)}},s=document.getElementById("save-project"),n=document.querySelector(".projects-ul"),o=document.getElementById("save-task"),a=document.querySelector(".big-todos-containers");o.addEventListener("click",(function(){const t=c.createTask();c.pushTaskInProject(t),c.displayTask(t)})),s.addEventListener("click",(function(){const t=e.createAddProject();e.projectsArray.push(t),e.displayProjects(),console.log(e.projectsArray)})),n.addEventListener("click",(function(t){if(t.target.classList.contains("project-name")){if(!0===c.taskDisplayed){const t=document.querySelector(".project-todo-title").textContent;e.projectsArray.find((e=>e.title===t)).taskDisplayed=!1}const s=t.target.textContent,n=function(t){return t.title===s},o=e.projectsArray.findIndex(n);document.querySelector(".project-todo-title").textContent=e.projectsArray[o].title,e.projectsArray[o].taskDisplayed=!0;const a=document.querySelector(".big-todos-containers");for(;a.firstChild;)a.removeChild(a.firstChild);c.taskDisplayed=!0}})),a.addEventListener("click",(function(t){if(t.target.classList.contains("checkbox")){t.target.classList.toggle("checked");const c=t.target.nextElementSibling.textContent,s=e.projectsArray.find((t=>!0===t.taskDisplayed)).tasks.find((t=>t.title===c));!0===s.checked?s.checked=!1:s.checked=!0}}))})();