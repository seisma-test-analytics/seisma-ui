'use strict';

import { dateToString, minusDays } from './utils/date';
import { URLEncode, objectToGetParamsString } from './utils/http';

import MainPage from './pages/mainPage';

import MonitorPage from './pages/monitorPage';
import JobCasesPage from './pages/jobCasesPage';
import JobBuildsPage from './pages/jobBuildsPage';
import JobResultsPage from './pages/jobResultsPage';
import CaseResultPage from './pages/caseResultPage';
import CaseResultsPage from './pages/caseResultsPage';
import BuildResultsPage from './pages/buildResultsPage';


const URLs = {
    main: {
        page: MainPage,
        route: '/',
        link: () => '/'
    },

    monitor: {
        page: MonitorPage,
        route: '/monitor',
        link: () => '/monitor'
    },

    jobResults: {
        page: JobResultsPage,
        route: '/jobs/:job/results',
        link: (jobName) => `/jobs/${URLEncode(jobName)}/results${
            objectToGetParamsString({
                date_from: dateToString(minusDays(new Date(), 1))
            })
        }`
    },

    builds: {
        page: JobBuildsPage,
        route: '/jobs/:job/builds',
        link: (jobName) => `/jobs/${URLEncode(jobName)}/builds${
            objectToGetParamsString({
                date_from: dateToString(minusDays(new Date(), 1))
            })
        }`
    },
    build: {
        page: BuildResultsPage,
        route: '/jobs/:job/builds/:build',
        link: (jobName, buildName) => `/jobs/${URLEncode(jobName)}/builds/${URLEncode(buildName)}`
    },

    cases: {
        page: JobCasesPage,
        route: '/jobs/:job/cases',
        link: (jobName) => `/jobs/${URLEncode(jobName)}/cases`,
    },
    caseResults: {
        page: CaseResultsPage,
        route: '/jobs/:job/cases/:case',
        link: (jobName, caseName) => {
            return `/jobs/${URLEncode(jobName)}/cases/${URLEncode(caseName)}${
                objectToGetParamsString({
                    date_from: dateToString(minusDays(new Date(), 1))
                })
            }`
        }
    },
    caseResult: {
        page: CaseResultPage,
        route: '/jobs/:job/cases/:case/:result',
        link: (jobName, caseName, resultId) => {
            return `/jobs/${URLEncode(jobName)}/cases/${URLEncode(caseName)}/${resultId}`
        }
    }

};


export default URLs
