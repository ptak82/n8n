import { createComponentRenderer } from '@/__tests__/render';
import CanvasExecuteWorkflowButton from './CanvasExecuteWorkflowButton.vue';

const renderComponent = createComponentRenderer(CanvasExecuteWorkflowButton);

describe('CanvasExecuteWorkflowButton', () => {
	it('should render correctly', () => {
		const wrapper = renderComponent();

		expect(wrapper.html()).toMatchSnapshot();
	});

	it('should render different label when executing', () => {
		const wrapper = renderComponent({
			props: {
				executing: true,
			},
		});

		expect(wrapper.getAllByText('Executing workflow')).toHaveLength(2);
	});

	it('should render different label when executing and waiting for webhook', () => {
		const wrapper = renderComponent({
			props: {
				executing: true,
				waitingForWebhook: true,
			},
		});

		expect(wrapper.getAllByText('Waiting for trigger event')).toHaveLength(2);
	});
});
