package com.conexochallenge.conexochallengeservice.models.mappers;

import com.conexochallenge.conexochallengeservice.models.Challenge;
import com.conexochallenge.conexochallengeservice.models.Topic;
import com.conexochallenge.conexochallengeservice.models.dtos.ChallengeResponseDTO;

import java.util.List;

public class ChallengeMapper {
    public static ChallengeResponseDTO mapToChallengeResponseDTO(final Challenge challenge) {
        final var topic1 = new Topic(
                challenge.getTopic1(),
                List.of(challenge.getWord11(), challenge.getWord12(), challenge.getWord13(), challenge.getWord14()));
        final var topic2 = new Topic(
                challenge.getTopic2(),
                List.of(challenge.getWord21(), challenge.getWord22(), challenge.getWord23(), challenge.getWord24()));
        final var topic3 = new Topic(
                challenge.getTopic3(),
                List.of(challenge.getWord31(), challenge.getWord32(), challenge.getWord33(), challenge.getWord34()));
        final var topic4 = new Topic(
                challenge.getTopic4(),
                List.of(challenge.getWord41(), challenge.getWord42(), challenge.getWord43(), challenge.getWord44()));
        return new ChallengeResponseDTO(List.of(topic1, topic2, topic3, topic4));
    }
}
