import { TreeData } from '../src/types';
import TreeBuilder from "./treeBuilder";
// import TreeBuilder from './TreeBuilder';

export const complexTree: TreeData = new TreeBuilder(1)

    .withSubTree(
        new TreeBuilder('root')


            .withSubTree(
                new TreeBuilder('parrent 1') // 13
                    .withLeaf('Leaf 1 of Parent 1') // 14
                    .withLeaf('Leaf 2 of Parent 1') // 15
            )

            .withSubTree(
                new TreeBuilder('parent 2') // 13
                    .withLeaf('Leaf 1 of Parent 2') // 14
                    .withLeaf('Leaf 2 of Parent 2') // 14
            )
    )

    .build();
