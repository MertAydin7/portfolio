import { projects as resumeProjects, skills as resumeSkills } from './resumeData';

// Export projects directly from resumeData
export const projects = resumeProjects.map(project => ({
  title: project.title,
  description: project.description,
  image: project.image,
  category: project.category
}));

// Format programming skills for display
export const skills = [
  ...resumeSkills.programming.slice(0, 5).map(skill => ({
    name: skill.name,
    percentage: skill.level,
    description: "Programming Language"
  })),
  ...resumeSkills.frameworks.slice(0, 3).map(skill => ({
    name: skill.name,
    percentage: skill.level,
    description: "Framework/Library"
  })),
  ...resumeSkills.dataAnalysis.slice(0, 2).map(skill => ({
    name: skill.name,
    percentage: skill.level,
    description: "Data Analysis"
  })),
  {
    name: "Front-End Development",
    percentage: 85,
    description: "UI/UX, Responsive Design, Component Architecture"
  }
];

// Tools organized by category
export const developmentTools = resumeSkills.tools.map(tool => tool.name);

export const programmingLanguages = resumeSkills.programming.map(lang => lang.name);

export const frameworks = resumeSkills.frameworks.map(framework => framework.name);

export const dataTools = resumeSkills.dataAnalysis.map(tool => tool.name);
