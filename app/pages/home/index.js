import React, { Component } from 'react'
import ScrollReveal from 'scrollreveal'
import data from 'data'
import {
  Wrapper,
  Banner,
  HeadLine,
  HeadLineTail,
  RepoFilters,
  RepoWrapper,
  RepoList,
  BannerImage,
  BannerInfo,
} from './styled'
import Button from 'components/Button'
import Header from 'components/Header'
import Footer from 'components/Footer'
import RepoItem from 'components/RepoItem'

export default class componentName extends Component {
  constructor(props) {
    super(props)
    this.state = {
      repos: data,
      category: 'all',
    }
  }

  componentDidMount() {
    this.ScrollReveal = new ScrollReveal({
      scale: 1,
      duration: 900,
      easing: 'ease',
      distance: '50px',
    })
    this.ScrollReveal.reveal('.reveal')
    this.ScrollReveal.reveal('.reveal--delay1', { delay: 300 })
    this.ScrollReveal.reveal('.reveal--delay2', { delay: 500 })
    this.ScrollReveal.reveal('.reveal--delay3', { delay: 500 })
  }

  componentDidUpdate() {
    this.ScrollReveal.reveal('.reveal--delay3', { delay: 200 })
  }

  filteredRepos = category => {
    this.setState({
      repos:
        category === 'all'
          ? data
          : data.filter(repo => repo.category === category),
      category,
    })
  }

  render() {
    const { repos, category } = this.state
    return (
      <Wrapper c>
        <Header />
        <Banner>
          <BannerImage />
          <BannerInfo className="reveal">
            <HeadLine>Open source libraries</HeadLine>
            <HeadLineTail className="reveal--delay1">
              Curated by STRV
            </HeadLineTail>
          </BannerInfo>
        </Banner>
        <RepoWrapper>
          <RepoFilters className="reveal--delay2">
            <Button
              primary={category === 'all'}
              onClick={() => this.filteredRepos('all')}
            >
              all
            </Button>
            <Button
              primary={category === 'backend'}
              onClick={() => this.filteredRepos('backend')}
            >
              backend
            </Button>
            <Button
              primary={category === 'android'}
              onClick={() => this.filteredRepos('android')}
            >
              android
            </Button>
            <Button
              primary={category === 'ios'}
              onClick={() => this.filteredRepos('ios')}
            >
              ios
            </Button>
            <Button
              primary={category === 'iot'}
              onClick={() => this.filteredRepos('iot')}
            >
              iot
            </Button>
          </RepoFilters>
          <RepoList>
            {repos.map(repo => (
              <RepoItem
                className="reveal--delay3"
                key={`repo-item-${repo.name}`}
                repo={repo}
              />
            ))}
          </RepoList>
        </RepoWrapper>
        <Footer />
      </Wrapper>
    )
  }
}
