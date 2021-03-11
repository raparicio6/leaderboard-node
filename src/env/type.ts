interface FirebaseConfig {
  readonly url?: string;
}

export interface Env {
  readonly node: string;
  readonly isProduction: boolean;
  readonly isTest: boolean;
  readonly isDevelopment: boolean;
  readonly port: number;
  readonly firebase: FirebaseConfig;
}
