import { View, StyleSheet, ViewStyle, ViewToken, ViewabilityConfigCallbackPair, Dimensions } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import SliderItem from './SliderItem'
import Animated, { scrollTo, useAnimatedRef, useAnimatedScrollHandler, useDerivedValue, useSharedValue, withSpring } from 'react-native-reanimated'
import Pagination from './Pagination'
import { ImageSliderType } from '@/data/SliderData'

type Props = {
    sliderStyles?: ViewStyle;
    itemList: ImageSliderType[];
}

const { width: screenWidth } = Dimensions.get('screen')

const Slider = (props: Props) => {
    const scrollX = useSharedValue(0);
    const [paginationIndex, setPaginationIndex] = useState<number>(0);
    const [data, setData] = useState<ImageSliderType[]>(props.itemList);
    const ref = useAnimatedRef<Animated.FlatList<any>>();
    const [isAutoplay, setIsAutoplay] = useState(true);
    const interval = useRef<NodeJS.Timeout>();
    const offset = useSharedValue(0);

    const onScrollHandler = useAnimatedScrollHandler({
        onScroll: (event) => {
            scrollX.value = event.contentOffset.x
        },
        onMomentumEnd: (event) => {
            offset.value = event.contentOffset.x;
        }
    });

    useEffect(() => {
        if (isAutoplay == true) {
            interval.current = setInterval(() => {
                offset.value = offset.value + screenWidth
            }, 3000)
        }
        else {
            clearInterval(interval.current);
        }

        return () => {
            clearInterval(interval.current);
        }
    }, [isAutoplay, offset, screenWidth])

    useDerivedValue(() => {
        scrollTo(ref, offset.value, 0, true)
    })

    const onViewableItemsChanged = ({ viewableItems }: { viewableItems: ViewToken[] }) => {
        if (viewableItems.length == 0) {
            return;
        }
        if (!viewableItems[0]) {
            return;
        }
        if (viewableItems[0].index != undefined && viewableItems[0].index != null) {
            setPaginationIndex(viewableItems[0].index % props.itemList.length)
        }
    }

    const viewabilityConfig: any = {
        itemVisiblePercentThreshold: 0
    }

    const viewabilityConfigCallbackPairs = useRef([
        { viewabilityConfig, onViewableItemsChanged }
    ])

    return (
        <View style={props.sliderStyles}>
            <Animated.FlatList
                ref={ref}
                removeClippedSubviews={false}
                data={data}
                renderItem={({ item, index }) => <SliderItem item={item} index={index} scrollX={scrollX} />}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                onScroll={onScrollHandler}
                scrollEventThrottle={16}
                viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
                onEndReached={() => setData([...data, ...props.itemList])}
                onEndReachedThreshold={0.5}
                onScrollBeginDrag={() => {
                    setIsAutoplay(false);
                }}
                onScrollAnimationEnd={(() => {
                    setIsAutoplay(true);
                })}
            />
            <Pagination
                items={props.itemList}
                paginationIndex={paginationIndex}
                scrollX={scrollX}
            />
        </View>
    )
}

export default Slider

const styles = StyleSheet.create({

})