import { View, TextInput, Button } from 'react-native'
import { Video, ResizeMode } from 'expo-av';
import React from 'react'

const Videos = ({ value }) => {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});

    return (
        // <View className="mt-7">
        //     <TextInput value={value} />

        //     <View>

        //         <Video
        //             ref={video}
        //             scaleX={100} scaleY={100}
        //             source={{ uri: `https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4` }}
        //             useNativeControls
        //             resizeMode={ResizeMode.CONTAIN}
        //             isLooping
        //             onPlaybackStatusUpdate={status => setStatus(() => status)}
        //         />
        //         <View>
        //             <Button
        //                 title={status.isPlaying ? 'Pause' : 'Play'}
        //                 onPress={() =>
        //                     status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
        //                 }
        //             />
        //         </View>
        //     </View>
        // </View>
        <View >
            <Video
                ref={video}
                //   style={styles.video}
                source={{
                    uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                }}
                useNativeControls
                resizeMode={ResizeMode.CONTAIN}
                isLooping
                onPlaybackStatusUpdate={status => setStatus(() => status)}
            />
            <View >
                <Button
                    title={status.isPlaying ? 'Pause' : 'Play'}
                    onPress={() =>
                        status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
                    }
                />
            </View>
        </View>
    )
}

export default Videos