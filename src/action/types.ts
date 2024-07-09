export interface ActionInputs {
  sonarToken: string;
  project: string;
  organization: string;
  projectName: string;
  mainBranch: string;
  autoScan: boolean;
}

export enum ActionInputKeys {
  sonarToken = 'SONAR_TOKEN',
  project = 'SONAR_PROJECT_KEY',
  organization = 'SONAR_ORGANIZATION',
  projectName = 'SONAR_PROJECT_NAME',
  mainBranch = 'SONAR_DEFAULT_BRANCH',
  autoScan = 'SONAR_AUTOSCAN',
}

export enum ActionOutputKeys {
  organization = 'SONAR_ORGANIZATION',
  projectKey = 'SONAR_PROJECT_KEY',
}
