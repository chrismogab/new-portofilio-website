import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Home from './Home'

describe('Home', () => {
    it('renders the first js icon', () => {
        const { getByTestId } = render(<Home />)
        const jsIcon1 = getByTestId('js-icon-1')
        expect(jsIcon1).toBeInTheDocument()
    })

    it('renders the second js icon', () => {
        const { getByTestId } = render(<Home />)
        const jsIcon2 = getByTestId('js-icon-2')
        expect(jsIcon2).toBeInTheDocument()
    })

    it('clicks the "Live Demo" button', () => {
        const history = createMemoryHistory()
        const { getByTestId } = render(
            <Router history={history}>
                <Home />
            </Router>
        )
        const liveDemoButton = getByTestId('live-demo-button')
        fireEvent.click(liveDemoButton)
        expect(history.location.pathname).toEqual('/demo')
    })

    it('clicks the "Website Code" button', () => {
        const { getByTestId } = render(
            <Router>
                <Home />
            </Router>
        )
        const websiteCodeButton = getByTestId('website-code-button')
        fireEvent.click(websiteCodeButton)
        expect(window.location.href).toEqual(
            'https://github.com/chrismogab/new-portofilio-website'
        )
    })

    it('renders the correct links', () => {
        const { getByText } = render(
            <Router>
                <Home />
            </Router>
        )
        const homeLink = getByText(/home/i)
        const demoLink = getByText(/demo/i)
        const projectsLink = getByText(/projects/i)
        const blogLink = getByText(/blog/i)
        expect(homeLink.getAttribute('href')).toBe('/')
        expect(demoLink.getAttribute('href')).toBe('/demo')
        expect(projectsLink.getAttribute('href')).toBe('/projects')
        expect(blogLink.getAttribute('href')).toBe('/blog')
    })

    it('renders the logo image', () => {
        const { getByTestId } = render(<Home />)
        const logoImage = getByTestId('logo-image')
        expect(logoImage).toBeInTheDocument()
    })

    it('renders the logo link', () => {
        const { getByTestId } = render(
            <Router>
                <Home />
            </Router>
        )
        const logoLink = getByTestId('logo-link')
        expect(logoLink.getAttribute('href')).toBe('/')
    })
})
