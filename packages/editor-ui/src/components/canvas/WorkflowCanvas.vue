<script setup lang="ts">
import Canvas from '@/components/canvas/Canvas.vue';
import { toRef, useCssModule } from 'vue';
import type { Workflow } from 'n8n-workflow';
import type { IWorkflowDb } from '@/Interface';
import { useCanvasMapping } from '@/composables/useCanvasMapping';

defineOptions({
	inheritAttrs: false,
});

const props = defineProps<{
	id?: string;
	workflow: IWorkflowDb;
	workflowObject: Workflow;
}>();

const $style = useCssModule();

const workflow = toRef(props, 'workflow');
const workflowObject = toRef(props, 'workflowObject');

const { elements, connections } = useCanvasMapping({ workflow, workflowObject });
</script>

<template>
	<div :class="$style.wrapper">
		<div :class="$style.canvas">
			<Canvas v-if="workflow" :elements="elements" :connections="connections" v-bind="$attrs" />
		</div>
		<slot />
	</div>
</template>

<style lang="scss" module>
.wrapper {
	display: block;
	position: relative;
	width: 100%;
	height: 100%;
	overflow: hidden;
}

.canvas {
	width: 100%;
	height: 100%;
	position: relative;
	display: block;
}
</style>
