import { render, screen, fireEvent } from '@testing-library/react';
import ProjectList from '../ProjectList';
import projectsData from '@/data/projects.data.json';

describe('ProjectList', () => {
  it('should render all projects initially', () => {
    render(<ProjectList />);
    projectsData.projects.forEach((project) => {
      expect(screen.getByText(project.title)).toBeInTheDocument();
      expect(screen.getByText(project.description)).toBeInTheDocument();
    });
  });

  it('should filter projects by status', () => {
    render(<ProjectList />);
    const ongoingButton = screen.getByText('Devam Eden');
    fireEvent.click(ongoingButton);

    const ongoingProjects = projectsData.projects.filter((p) => p.status === 'ongoing');
    ongoingProjects.forEach((project) => {
      expect(screen.getByText(project.title)).toBeInTheDocument();
    });

    const completedProjects = projectsData.projects.filter((p) => p.status === 'completed');
    completedProjects.forEach((project) => {
      expect(screen.queryByText(project.title)).not.toBeInTheDocument();
    });
  });

  it('should show project details', () => {
    render(<ProjectList />);
    projectsData.projects.forEach((project) => {
      const card = screen.getByText(project.title).closest('article');
      expect(card).toHaveTextContent(project.budget);
      expect(card).toHaveTextContent(project.startDate);
      expect(card).toHaveTextContent(project.endDate);
    });
  });

  it('should link to project detail pages', () => {
    render(<ProjectList />);
    projectsData.projects.forEach((project) => {
      const link = screen.getByText(project.title).closest('a');
      expect(link).toHaveAttribute('href', `/projects/${project.id}`);
    });
  });
});
