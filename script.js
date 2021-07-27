
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);

const para = document.createElement('p');
para.classList.add('style');
para.style.color = 'red';  
para.textContent = 'Hey I’m red!';
container.appendChild(para);

const head = document.createElement('h3');
head.classList.add('heading-three');
head.style.color = 'blue';  
head.textContent = 'I’m a blue h3!';
container.appendChild(head);

const section = document.createElement('div');
section.classList.add('content-section');
section.style.border = '1px solid black';
section.style.width = '250px';
section.style.height = '150px';
section.style.backgroundColor = 'pink';
container.appendChild(section);


const heading = document.createElement('h1');
heading.classList.add('heading-one');
heading.textContent = 'I’m in a div';
section.appendChild(heading);

const paragraph = document.createElement('p');
paragraph.classList.add('para-style');
paragraph.textContent = 'ME TOO!';
section.appendChild(paragraph);


