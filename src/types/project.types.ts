

/**
 * @description Generic base for a project
 */
export type ProjectBase = {
	/**
	 * @description Project version
	 * @example "0.0.1"
	 */
	version: string;
	/** @description Project Header - generic descriptive info about the project */
  project: {
		/**
		 * @description Project name
		 * @example "My Project"
		 */
    name: string;
		/**
		 * @description Project description
		 * @example "A creative artificial intelligence chatbot designed to answer questions and provide relevant information to users"
		 */
    description: string;
		/**
		 * @description Project goals
		 * @example [
		 * 	"Provide accurate information",
		 *  "Engage users in creative conversations",
		 *  "Adapt to various user scenarios",
		 *  "Learn and improve through user interaction"
		 * ]
		 * @todo Should this be an array of strings or an array of objects?
		 */
    goals: string[];
  };
	/** @description Descriptive information about the project and its development */
  project_definition?: ProjectDefinition
	/** @description Project Runner Requirements */
  system_requirements?: ProjectRunnerRequirements
	/** @description Project End User Specification | UserStory / UserProfile */
  endusers?: ProjectEndUserSpecification
}

type ProjectDefinition = {
	/**
	 * @description Project domain
	 * @example "Healthcare" | "Artificial Intelligence"
	 */
	domain: string;
	/**
	 * @description Project subdomain
	 * @example "Medical" | "Chatbot"
	 */
	subdomain: string;
	/**
	 * @description Project target audience
	 * @example
	 * - ["Doctors", "Patients", "Researchers"]
	 * - ["General public", "businesses", "developers"]
	 */
	target_audience: string[];
	/**
	 * @description Project use cases
	 * @example
	 * - ["Medical diagnosis", "Medical research", "Medical education"]
	 * - ["Chatbot", "AI", "Machine Learning"]
	 * - ["Customer support", "Personal assistance", "Content generation", "Entertainment"]
	 */
	use_cases: string[];
	/**
	 * @description Project runner platforms
	 * @example
	 * - ["Web", "Mobile", "Desktop"]
	 * - ["Web", "Onpremise", "Cloud", "Serverless"]
	 * - ["Embedded", "IoT", "Arduino", "Raspberry Pi"]
	 * @todo Should this be an array of strings or an array of objects? (to specify platform use-cases)
	 */
	platforms: string[];
	/**
	 * @description Project communication channels
	 * @example
	 * - ["Text", "Voice"]
	 * - ["Text", "Voice", "Video", "Gesture"]
	 * - ["Touch", "Smell", "Taste", "Haptic", "Brain-Computer Interface"]
	 */
	communication_channels: string[];
	/**
	 * @description Project languages
	 * @example
	 * - ["English", "French", "Spanish"]
	 * - ["Estonian", "Italian", "Portuguese", "Russian", "Chinese", "Japanese", "Korean"]
	 */
	languages: string[];
	/**
	 * @description Project privacy spec
	 * @example
	 * - "Personal data is not collected"
	 * - "Personal data is collected and stored"
	 * - "Personal data is collected, stored and shared"
	 * - "Personal data is collected, stored and sold"
	 */
	privacy: string;
	/**
	 * @description Project compliance spec
	 * @example
	 * - ["GDPR", "HIPAA", "PCI-DSS"]
	 * - ["GDPR", "HIPAA", "FERPA"]
	 */
	compliance: string[]
	/**
	 * @description Project security spec requirements
	 * @example ["SOX", "FISMA", "NIST", "ISO"]
	 */
	security: string[];
}

// TODO: Minimum hardware requirements for different platforms?
type ProjectRunnerRequirements = {
	operating_systems: string[];
	minimum_hardware: {
		RAM: string;
		CPU: string;
		Free_disk_space: string;
		Internet_connection: string;
	};
	recommended_hardware: {
		RAM: string;
		CPU: string;
		Free_disk_space: string;
		Internet_connection: string;
	};
	dependencies: string[];
}

type ProjectEndUserSpecification = {
	onboarding: {
		steps: string[];
	};
	usage_scenarios: {
		scenario: string;
		example_input: string;
		example_output: string;
	}[];
}